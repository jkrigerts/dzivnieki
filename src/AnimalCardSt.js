import { Text, Card, Image, Badge, Group, Button, Modal } from "@mantine/core";

import { useState } from "react";

function AnimalCardSt({ dati }) {
  const [taken, setTaken] = useState(false);
  const [opened, setOpened] = useState(false);

  function changeTaken() {
    console.log(dati.name + " ir paņemts");
    setOpened(true);
    setTaken(true);
  }
  return (
    <Card shadow="sm" p="lg">
      <Card.Section>
        <Image src={dati.image} height={160} alt={dati.name} />
      </Card.Section>
      <Group position="apart" style={{ marginBottom: 5, marginTop: 5 }}>
        <Text weight={500}>{dati.name}</Text>
        <Badge color="pink" variant="light">
          {dati.species}
        </Badge>
        <Badge color="green" variant="light">
          {dati.age} gadi
        </Badge>
      </Group>
      <Text size="sm" style={{ lineHeight: 1.5, minHeight: 50 }}>
        {dati.description}
      </Text>
      <Button onClick={changeTaken} disabled={taken}>
        Paņemt
      </Button>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        {/* Modal content */}
      </Modal>
    </Card>
  );
}

export default AnimalCardSt;
