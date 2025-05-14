"use client";

import React, { useEffect } from "react";
import {
  useSurvivorActions,
  useSurvivorState,
} from "@/providers/survivors-provider";
import { Spin, Card } from "antd";

interface SurvivorContactProps {
  onSelect: (person: {
    id: string;
    displayName?: string;
    name?: string;
    surname?: string;
  }) => void;
}

const SurvivorContacts: React.FC<SurvivorContactProps> = ({ onSelect }) => {
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
      {Survivors?.length > 0 ? (
        Survivors.map((survivor) => (
          <Card
            key={survivor.id}
            onClick={() =>
              onSelect({
                id: survivor.id,
                displayName: survivor.displayName,
                name: survivor.name,
                surname: survivor.surname,
              })
            }
            hoverable
            style={{ marginBottom: 8 }}
          >
            <h4>
              {survivor.displayName || `${survivor.name} ${survivor.surname}`}
            </h4>
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
