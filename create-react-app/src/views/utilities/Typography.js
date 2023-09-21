import { Grid, TextField, InputAdornment, Button, Box } from '@mui/material';
import ImageUploader from 'utils/ImageUploader';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ==============================|| TYPOGRAPHY ||============================== //

const Typography = () => (
  <MainCard>
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} sm={6}>
        <SubCard title="Information">
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <TextField label="Product name" id="product_name" fullWidth />
            </Grid>
            <Grid item>
              <Grid item>
                <TextField label="Category" id="category" fullWidth />
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
              <TextField id="product_description" fullWidth multiline rows={4} />
              <Box marginTop={3} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Button variant="outlined">🤖 AI Assist </Button>
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

export default Typography;
