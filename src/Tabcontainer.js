import React, { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';

export default function SimpleTabs() {
  const [value, setValue] = useState('1'); // State to track the selected tab

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue); // Update the selected tab
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      {/* TabContext wraps the entire tab component */}
      <TabContext value={value}>
        {/* TabList contains all the tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Tab One" value="1" />
            <Tab label="Tab Two" value="2" />
            <Tab label="Tab Three" value="3" />
          </TabList>
        </Box>

        {/* TabPanels display the content for each tab */}
        <TabPanel value="1">
          <h2>Content for Tab One</h2>
          <p>This is the first tab's content.</p>
        </TabPanel>
        <TabPanel value="2">
          <h2>Content for Tab Two</h2>
          <p>This is the second tab's content.</p>
        </TabPanel>
        <TabPanel value="3">
          <h2>Content for Tab Three</h2>
          <p>This is the third tab's content.</p>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
