"use client";
import React, { useEffect } from "react";
import {
  useSurvivorActions,
  useSurvivorState,
} from "@/providers/survivors-provider";
import { Spin, Card } from "antd";

interface Props {
  onSelect: (id: string) => void;
}

const SurvivorContacts: React.FC<Props> = ({ onSelect }) => {
  const { getSurvivors } = useSurvivorActions();
  const { Survivors, isPending } = useSurvivorState();

  useEffect(() => {
    if (!Survivors || Survivors.length === 0) {
      getSurvivors();
    }
  }, []);

  return (
    <div>
      <h3>Select a Survivor</h3>
      {isPending && <Spin />}
      {Survivors && Survivors.length > 0 ? (
        Survivors.map((survivor) => (
          <Card
            key={survivor.id}
            onClick={() => onSelect(survivor.id)}
            hoverable
            style={{ marginBottom: 8 }}
          >
            <h4>{survivor?.displayName || "Unnamed Survivor"}</h4>
            <p>
              {survivor?.displayName ||
                `${survivor?.name} ${survivor?.surname}`}
            </p>
            <p>
              {survivor.sex === 1  
                ? "Male"
                : survivor.sex === 2
                ? "Female"
                : "Not disclosed"}
            </p>
          </Card>
        ))
      ) : (
        <p>No Survivors available.</p>
      )}
    </div>
  );
};

export default SurvivorContacts;
