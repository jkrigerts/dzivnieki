import { useState } from "react";

import { Text, Card, Image, Badge, Group, Button, Center } from "@mantine/core";

function AnimalCard({ dati }) {
  const [taken, setTaken] = useState(false);
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
      <Text size="sm" style={{ lineHeight: 1.5, height: "100px" }}>
        {dati.description}
      </Text>
      <Center>
        <Button onClick={() => console.log("Paņemt")} disabled={taken}>
          Paņemt
        </Button>
      </Center>
    </Card>
  );
}

export default AnimalCard;
