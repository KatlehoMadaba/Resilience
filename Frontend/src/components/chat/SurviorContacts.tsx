"use client";
import React, { useEffect } from "react";
import { useSurvivorActions } from "@/providers/survivors-provider";
import { useSurvivorState } from "@/providers/survivors-provider";
import { Spin } from "antd";
const SurvivorContacts = () => {
  const { getSurvivors } = useSurvivorActions();
  const { Survivors, isPending } = useSurvivorState();
  useEffect(() => {
    if (!Survivors || Survivors.length === 0) {
      getSurvivors();
    }
  }, []);
  return (
    <div>
      {isPending && <Spin />}
      {Survivors && Survivors.length > 0 ? (
        Survivors.map((survivor, index) => (
          <div key={index}>
            <h3>{survivor.userName || survivor.displayName}</h3>
            <p>{survivor.sex || "no content avail"}</p>
          </div>
        ))
      ) : (
        <p>No Survivors available.</p>
      )}
    </div>
  );
};

export default SurvivorContacts;
