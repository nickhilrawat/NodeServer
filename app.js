const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(bodyParser.json());

// Define a GET route
app.get('/api/data', async (req, res) => {
    const url = 'https://www.nseindia.com/api/latest-circular';
    const headers ={};
// const headers = {
//   'Cookie': 'ak_bmsc=ABD5830D931CA82B810F5FF579E4546F~000000000000000000000000000000~YAAQNuhUuP3/GdGJAQAANy/U8hRxlc2lwqylp8typpapWaT+IxDY35dGPIqx8D/N1GiDCWyvTp82K6hjEnPkiPNH800BWkFyE2Us7S0VsF/eZfGDgP7YeBLUMvMTQnXdEzpgBk8DUGR+fwNvkk4Rjn8kwQmEtIwaDHFJlLGbkdJXcDznw+6/sI4XKQ+OBlrScR9V6XoKYrWLWzGwQQj5XQckLFOEgZzAPhuMDOtOJ8x/LppHdK+fdTJ8PTCQaDJz2exrjFs0sHiJ90j/jnMNZvVmyd2UUI0SEk7s5z5YmE8DTPk4TvvAUM4qOC293modL2TU3pkVizVmK6A7q4gazrpBbiPOLL7KR5DYVKP0JLI34lahn0LTFHG53X2f; bm_sv=2A281DEE424A5D41FD27976EDA84EC20~YAAQNuhUuE0AGtGJAQAAVzzU8hR8BN9hpABBayqyo2iscy2YYxPGJbuSNwqei5Gh7SWboyEc5DLS9/uAdjfazogj+jEv1uFKQI1sbVDHcjfJUTQN4omKoawDvOhNxrCk5ALTR3Pxwmvhb901EtSzDo1nVI88pVD2GZXRR+MJ3Ys9+M8qVvO2JhRxQ7MXHc512u7nt0VmDbJbEEv+maLX6981C2XNwKrkvCt28W8EqXtQ54Zp5niypmZIGPCpGGXMov8=~1'
// };
try {
    const response = await axios.get(url,headers);
    const data = [response.data];
    res.send(data);
  } catch (error) {
    console.error('Error calling external API:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});