// // pages/api/generateReport.ts

// import { NextApiRequest, NextApiResponse } from "next";
// import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
// import { OpenAI } from "openai";

// const openai = new OpenAI({
//     // apiKey: process.env.OPENAI_API_KEY, // Must be in .env.local
//     apiKey: "k - proj - 1hK3HZNipmaHMsEnOILOgaHPwJ4Lk_3P3txdExTmT5RNaKqP0TRLU4j24qyNgmH9xEwwO88nFNT3BlbkFJah25ojIcZBSChwAU5fWL- 9w7fPAb8NGEPuLotnK1bxYr_3a9V_vQVzmUgTD - jDZ85j22ED1BQA"
// });

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method !== "POST") return res.status(405).end();

//     try {
//         const report = req.body;

//         // Add error check for missing data
//         if (!report) {
//             return res.status(400).json({ message: "Report data is required" });
//         }

//         console.log("Generating report for:", report.fullName);

//         const prompt = `You're a professional police report writer. Create a detailed formal police report based on this JSON:\n${JSON.stringify(report, null, 2)}`;

//         // Call OpenAI API
//         console.log("Calling OpenAI API...");
//         const completion = await openai.chat.completions.create({
//             model: "gpt-4o",
//             messages: [{ role: "user", content: prompt }],
//             temperature: 0.4,
//         });

//         const generatedText = completion.choices[0].message?.content || "Report generation failed.";
//         console.log("Generated text length:", generatedText.length);

//         // Create PDF
//         console.log("Creating PDF document...");
//         const pdfDoc = await PDFDocument.create();
//         const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
//         const fontSize = 12;
//         const lineHeight = fontSize * 1.2;
//         const margin = 50;

//         // Split text into paragraphs and then words for better text flow
//         const paragraphs = generatedText.split('\n\n');

//         let currentPage = pdfDoc.addPage([595, 842]); // A4
//         let { width, height } = currentPage.getSize();
//         let y = height - margin;
//         let pageNum = 1;

//         // Add a header
//         currentPage.drawText(`POLICE REPORT - CONFIDENTIAL`, {
//             x: margin,
//             y: height - margin,
//             size: 16,
//             font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
//             color: rgb(0, 0, 0),
//         });

//         y -= lineHeight * 2;

//         // Process paragraphs
//         for (const paragraph of paragraphs) {
//             // Check if we need a new page
//             if (y < margin + lineHeight) {
//                 currentPage = pdfDoc.addPage([595, 842]);
//                 y = height - margin;
//                 pageNum++;

//                 // Add page number
//                 currentPage.drawText(`Page ${pageNum}`, {
//                     x: width - margin - 40,
//                     y: margin / 2,
//                     size: 10,
//                     font,
//                     color: rgb(0, 0, 0),
//                 });
//             }

//             // Process words to create lines that fit the page width
//             const words = paragraph.split(' ');
//             let line = '';

//             for (let i = 0; i < words.length; i++) {
//                 const testLine = line + words[i] + ' ';
//                 const textWidth = font.widthOfTextAtSize(testLine, fontSize);

//                 if (textWidth > width - margin * 2) {
//                     // Draw the current line
//                     currentPage.drawText(line, {
//                         x: margin,
//                         y,
//                         size: fontSize,
//                         font,
//                         color: rgb(0, 0, 0),
//                     });

//                     line = words[i] + ' ';
//                     y -= lineHeight;

//                     // Check if we need a new page
//                     if (y < margin + lineHeight) {
//                         currentPage = pdfDoc.addPage([595, 842]);
//                         y = height - margin;
//                         pageNum++;

//                         // Add page number
//                         currentPage.drawText(`Page ${pageNum}`, {
//                             x: width - margin - 40,
//                             y: margin / 2,
//                             size: 10,
//                             font,
//                             color: rgb(0, 0, 0),
//                         });
//                     }
//                 } else {
//                     line = testLine;
//                 }
//             }

//             // Draw any remaining text in the line
//             if (line.trim().length > 0) {
//                 currentPage.drawText(line, {
//                     x: margin,
//                     y,
//                     size: fontSize,
//                     font,
//                     color: rgb(0, 0, 0),
//                 });
//                 y -= lineHeight;
//             }

//             // Add extra space between paragraphs
//             y -= lineHeight;
//         }

//         // Add signature section
//         y -= lineHeight * 2;
//         if (y < margin + lineHeight * 5) {
//             currentPage = pdfDoc.addPage([595, 842]);
//             y = height - margin;
//             pageNum++;
//         }

//         currentPage.drawText('Officer Signature: _________________________', {
//             x: margin,
//             y,
//             size: fontSize,
//             font,
//             color: rgb(0, 0, 0),
//         });

//         y -= lineHeight * 2;

//         currentPage.drawText('Date: _________________________', {
//             x: margin,
//             y,
//             size: fontSize,
//             font,
//             color: rgb(0, 0, 0),
//         });

//         y -= lineHeight * 2;

//         currentPage.drawText('Case Number: _________________________', {
//             x: margin,
//             y,
//             size: fontSize,
//             font,
//             color: rgb(0, 0, 0),
//         });

//         // Add footer with timestamp to all pages
//         const dateString = new Date().toLocaleString();
//         for (let i = 0; i < pdfDoc.getPageCount(); i++) {
//             const page = pdfDoc.getPage(i);
//             page.drawText(`Generated: ${dateString}`, {
//                 x: margin,
//                 y: margin / 2,
//                 size: 8,
//                 font,
//                 color: rgb(0.5, 0.5, 0.5),
//             });
//         }

//         console.log("Saving PDF...");
//         const pdfBytes = await pdfDoc.save();
//         console.log("PDF generated successfully");

//         res.setHeader("Content-Type", "application/pdf");
//         res.setHeader("Content-Disposition", `attachment; filename="PoliceReport.pdf"`);
//         res.send(Buffer.from(pdfBytes));
//     } catch (err) {
//         console.error("PDF Generation Error:", err);
//         res.status(500).json({ message: "Failed to generate PDF report.", error: err.message });
//     }
// }