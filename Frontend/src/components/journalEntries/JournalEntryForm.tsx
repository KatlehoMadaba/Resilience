"use client";
import React, { useState } from "react";
import {
  useJournalEntryActions,
  useJournalEntryState,
} from "@/providers/journal-provider";
import { useSurvivorState} from '@/providers/survivors-provider';
import { Button } from "antd";
import { IJournalEntry } from "@/providers/journal-provider/models";

const JournalEntryForm = () => {
const { currentSurvivor } = useSurvivorState();
const { createJournalEntry } = useJournalEntryActions();
const { isSuccess,isPending,isError} = useJournalEntryState();
  const [loading, setLoading] = useState(false);

  const onJournalSubmit = () => {
    try {
      const journalEntry: IJournalEntry = {
        personId: currentSurvivor?.id,
        content: "I am feeling sad",
        entryDate: new Date().toISOString(), 
        tags: ["I am sad", "Abc"],
        isPrivate: true,
        };
        if (isError) {
           // console.log("Sorry there was an error creating")
            setLoading(false);
        }
        if (isSuccess) {
           // console.log("that was sucessful..")
            setLoading(false)
        }
        if (isPending) {
            setLoading(true)
        }
            
        createJournalEntry(journalEntry);
      //console.log("Journal Entry Submitted:", journalEntry);
    } catch (error) {
      console.error("Error submitting journal entry:", error);
    }
  };
  return (
    <>
      <Button onClick={onJournalSubmit} loading={loading}>
        Submit
      </Button>
    </>
  );
};

export default JournalEntryForm;
