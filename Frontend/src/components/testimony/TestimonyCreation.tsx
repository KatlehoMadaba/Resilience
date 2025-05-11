"use client";
import React, { useState } from "react";
import {
  useTestimonyActions,
  useTestimonyState,
} from "@/providers/testimony-provider";
import { useSurvivorState } from "@/providers/survivors-provider";
import { Button } from "antd";
import { ITestimony } from "@/providers/testimony-provider/models";

const TestimonyForm = () => {
  const { currentSurvivor } = useSurvivorState();
  const { createTestimony } = useTestimonyActions();
  const { isSuccess, isPending, isError } = useTestimonyState();
  const [loading, setLoading] = useState(false);

  const onTestimonySubmit = () => {
    try {
      const Testimony: ITestimony = {
        personId: currentSurvivor?.id,
        title: "I am breaking through",
        content: "I have overcame it",
        tags: ["#Save", "Huge"],
        isAnonymous: true,
      };
      if (isError) {

        setLoading(false);
      }
      if (isSuccess) {

        setLoading(false);
      }
      if (isPending) {
        setLoading(true);
      }

      createTestimony(Testimony);
    } catch (error) {
      console.error("Error submitting Testimony entry:", error);
    }
  };
  return (
    <>
      <Button onClick={onTestimonySubmit} loading={loading}>
        Submit
      </Button>
    </>
  );
};

export default TestimonyForm;
