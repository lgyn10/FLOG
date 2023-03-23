import { useEffect, useState } from 'react';
import axios from 'axios';

function getFirst() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('/api/data')
      .then((response) => setData(response.data))
      .catch((error) => console.error(error));
  }, []);
}

export default getFirst;
