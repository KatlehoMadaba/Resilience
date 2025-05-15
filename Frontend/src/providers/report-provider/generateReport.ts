// pages/api/generateReport.ts

import { NextApiRequest, NextApiResponse } from "next";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { OpenAI } from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY_2,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") return res.status(405).end();

    try {
        const report = req.body;

        if (!report) {
            return res.status(400).json({ message: "Report data is required" });
        }

        const prompt = `You're a professional police report writer. Create a detailed formal police report based on this JSON:\n${JSON.stringify(report, null, 2)}`;
        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.4,
        });

        const generatedText = completion.choices[0].message?.content || "Report generation failed.";

        // Create PDF
        const pdfDoc = await PDFDocument.create();
        const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
        const fontSize = 12;
        const lineHeight = fontSize * 1.2;
        const margin = 50;

        const paragraphs = generatedText.split('\n\n');

        let currentPage = pdfDoc.addPage([595, 842]);
        const { width, height } = currentPage.getSize();
        let y = height - margin;
        let pageNum = 1;

        // Add header
        currentPage.drawText(`POLICE REPORT - CONFIDENTIAL`, {
            x: margin,
            y: height - margin,
            size: 16,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        y -= lineHeight * 2;

        for (const paragraph of paragraphs) {
            if (y < margin + lineHeight) {
                currentPage = pdfDoc.addPage([595, 842]);
                y = height - margin;
                pageNum++;

                currentPage.drawText(`Page ${pageNum}`, {
                    x: width - margin - 40,
                    y: margin / 2,
                    size: 10,
                    font,
                    color: rgb(0, 0, 0),
                });
            }

            const words = paragraph.split(' ');
            let line = '';

            for (let i = 0; i < words.length; i++) {
                const testLine = line + words[i] + ' ';
                const textWidth = font.widthOfTextAtSize(testLine, fontSize);

                if (textWidth > width - margin * 2) {
                    currentPage.drawText(line, {
                        x: margin,
                        y,
                        size: fontSize,
                        font,
                        color: rgb(0, 0, 0),
                    });

                    line = words[i] + ' ';
                    y -= lineHeight;

                    if (y < margin + lineHeight) {
                        currentPage = pdfDoc.addPage([595, 842]);
                        y = height - margin;
                        pageNum++;

                        currentPage.drawText(`Page ${pageNum}`, {
                            x: width - margin - 40,
                            y: margin / 2,
                            size: 10,
                            font,
                            color: rgb(0, 0, 0),
                        });
                    }
                } else {
                    line = testLine;
                }
            }

            if (line.trim().length > 0) {
                currentPage.drawText(line, {
                    x: margin,
                    y,
                    size: fontSize,
                    font,
                    color: rgb(0, 0, 0),
                });
                y -= lineHeight;
            }

            y -= lineHeight;
        }

        // Signature section
        y -= lineHeight * 2;
        if (y < margin + lineHeight * 5) {
            currentPage = pdfDoc.addPage([595, 842]);
            y = height - margin;
            pageNum++;
        }

        currentPage.drawText('Officer Signature: _________________________', {
            x: margin,
            y,
            size: fontSize,
            font,
            color: rgb(0, 0, 0),
        });

        y -= lineHeight * 2;

        currentPage.drawText('Date: _________________________', {
            x: margin,
            y,
            size: fontSize,
            font,
            color: rgb(0, 0, 0),
        });

        y -= lineHeight * 2;

        currentPage.drawText('Case Number: _________________________', {
            x: margin,
            y,
            size: fontSize,
            font,
            color: rgb(0, 0, 0),
        });

        // Footer
        const dateString = new Date().toLocaleString();
        for (let i = 0; i < pdfDoc.getPageCount(); i++) {
            const page = pdfDoc.getPage(i);
            page.drawText(`Generated: ${dateString}`, {
                x: margin,
                y: margin / 2,
                size: 8,
                font,
                color: rgb(0.5, 0.5, 0.5),
            });
        }

        const pdfBytes = await pdfDoc.save();
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", `attachment; filename="PoliceReport.pdf"`);
        res.send(Buffer.from(pdfBytes));
    } catch (err) {
        console.error("PDF Generation Error:", err);
        res.status(500).json({ message: "Failed to generate PDF report.", error: err.message });
    }
}
