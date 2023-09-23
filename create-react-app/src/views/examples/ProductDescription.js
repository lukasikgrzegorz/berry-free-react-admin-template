import { Grid, TextField, InputAdornment, Button, Box } from '@mui/material';
import { useState } from 'react';
import ImageUploader from 'utils/ImageUploader';
import Loader from 'ui-component/Loader';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ==============================|| TYPOGRAPHY ||============================== //

const token = 'HERE_TOKEN';
const URL = 'http://127.0.0.1:8080/productdescriptions';

const ProductDescription = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState(' ');
  const [isLoading, setIsLoading] = useState(false);

  const generateDescription = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(URL, {
        method: 'POST', // Lub inna metoda HTTP, jeśli to wymagane
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json' // Możesz dostosować nagłówki do swoich potrzeb
        },
        body: JSON.stringify({ name: name, category: category, params: description })
      });

      const data = await response.json();
      setDescription(data.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Wystąpił błąd:', error);
      setIsLoading(false);
    }
  };

  return (
    <MainCard>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={6}>
          <SubCard title="Information">
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <TextField
                  label="Product name"
                  id="product_name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Grid item>
                  <TextField
                    label="Category"
                    id="category"
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Grid item>
                <Grid item>
                  <TextField
                    label="Price"
                    id="price"
                    InputProps={{
                      endAdornment: <InputAdornment position="end">$</InputAdornment>
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <SubCard title="Description">
            <Grid container direction="column" spacing={1}>
              <Grid item>
                {' '}
                <TextField
                  id="product_description"
                  fullWidth
                  multiline
                  rows={4}
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <Box marginTop={3} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  {!isLoading ? (
                    <Button variant="outlined" onClick={generateDescription}>
                      {'🤖 AI Assist'}
                    </Button>
                  ) : (
                    <>
                      {' '}
                      <Button variant="outlined" disabled>
                        {'🤖 AI Working'}
                      </Button>
                      <Loader />
                    </>
                  )}
                </Box>
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        {true && (
          <Grid item xs={12} sm={12}>
            <SubCard title="Images">
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <ImageUploader sm />
                </Grid>
              </Grid>
            </SubCard>
          </Grid>
        )}
      </Grid>
      <Box marginTop={2} sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
        <Button variant="contained">Create</Button>
      </Box>
    </MainCard>
  );
};

export default ProductDescription;
