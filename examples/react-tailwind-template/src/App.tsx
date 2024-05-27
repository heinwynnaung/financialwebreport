import React, { useState } from 'react';
import { Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography, Box } from '@mui/material';
import EmbedCode from './EmbedCode';
import './App.css';

const embedCodes = {
  'TAS Performance Dashboard': `
    <iframe title="TAS Performance Dashboard" width="1000" height="500" src="https://app.powerbi.com/view?r=eyJrIjoiMTcyNGVmYzItYTY0Ny00NWIyLTg4YTAtMDY2MDVhNTQ2N2RmIiwidCI6IjZmNDQzMmRjLTIwZDItNDQxZC1iMWRiLWFjMzM4MGJhNjMzZCIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
  `,
  'Financial Dashboard': `
    <iframe title="Financial Dashboard" width="1000" height="500" src="https://app.powerbi.com/view?r=eyJrIjoiNDYyNjUwNDItYzM1My00ZWQwLWI2YjQtZTNlOGUxMDhlMmRiIiwidCI6IjZmNDQzMmRjLTIwZDItNDQxZC1iMWRiLWFjMzM4MGJhNjMzZCIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
  `,
  'General Journal': `
    <iframe title="Journal Entry" width="1000" height="500" src="https://app.powerbi.com/view?r=eyJrIjoiODQ3MmRhMmItZDU2ZS00ZmVkLWE2ZGMtZWUyZWQwMTEzZTc3IiwidCI6IjZmNDQzMmRjLTIwZDItNDQxZC1iMWRiLWFjMzM4MGJhNjMzZCIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
  `,
  'General Ledger': `
    <iframe title="General Ledger" width="1000" height="500" src="https://app.powerbi.com/view?r=eyJrIjoiMWY5OWFkZTgtNjQyYS00YjI3LTllODUtNWVkZDRkM2Q1MGU4IiwidCI6IjZmNDQzMmRjLTIwZDItNDQxZC1iMWRiLWFjMzM4MGJhNjMzZCIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
  `,
  'Monthly Income Statement': `
    <iframe width="475" height="475" frameborder="0" scrolling="no" src="https://mailkmuttacth-my.sharepoint.com/personal/heinwynn_aung_kmutt_ac_th/_layouts/15/Doc.aspx?sourcedoc={e42feab2-858b-4519-89c7-75a036263da7}&action=embedview&wdAllowInteractivity=False&Item='Sheet1'!A1%3AC23&wdInConfigurator=True&wdInConfigurator=True"></iframe>
  `,
  'Inventory Stock Card': `
    <iframe width="335" height="170" frameborder="0" scrolling="no" src="https://mailkmuttacth-my.sharepoint.com/personal/heinwynn_aung_kmutt_ac_th/_layouts/15/Doc.aspx?sourcedoc={0a646d3e-3222-4813-bbd9-88aeedd068a9}&action=embedview&wdAllowInteractivity=False&Item='Sheet1'!A1%3AC7&wdHideGridlines=True&wdInConfigurator=True&wdInConfigurator=True"></iframe>
  `,
  'Purchase Order': `
    <iframe title="Purchase Order" width="1000" height="500" src="https://app.powerbi.com/view?r=eyJrIjoiOGYyNjY2OTItMTI4YS00YzM3LWFlOGMtYzNiZDhhNzA1OTU5IiwidCI6IjZmNDQzMmRjLTIwZDItNDQxZC1iMWRiLWFjMzM4MGJhNjMzZCIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
  `,
  'Paid Sales Invoice': `
    <iframe title="Paid Sales Invoice" width="1000" height="500" src="https://app.powerbi.com/view?r=eyJrIjoiYTc1MTE2NWEtYjAzZS00ZTk3LThhYmMtZWQzNWMwZDI3NzU5IiwidCI6IjZmNDQzMmRjLTIwZDItNDQxZC1iMWRiLWFjMzM4MGJhNjMzZCIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
  `
};


type EmbedKey = keyof typeof embedCodes;

const App: React.FC = () => {
  const [selectedEmbed, setSelectedEmbed] = useState<EmbedKey>('TAS Performance Dashboard');

  const handleSelectionChange = (event: SelectChangeEvent<string>) => {
    setSelectedEmbed(event.target.value as EmbedKey);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '50px', textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        Financial Web Report
      </Typography>
      <FormControl variant="outlined" fullWidth>
        <InputLabel id="embed-select-label">Select</InputLabel>
        <Select
          labelId="embed-select-label"
          id="embed-select"
          value={selectedEmbed}
          onChange={handleSelectionChange}
          label="Select"
        >
          {Object.keys(embedCodes).map((key) => (
            <MenuItem key={key} value={key}>
              {key}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box mt={4}>
        <EmbedCode embedCode={embedCodes[selectedEmbed]} />
      </Box>
    </Container>
  );
};

export default App;
