import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  Paper,
  Divider,
  TextField,
  Button,
  Link,
} from '@mui/material';
import foodpageImage from '../../assets/foodpageImage.svg';
import recipeImage from '../pageStyle/recipeImage';

const FoodPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Food Name
      </Typography>
      <Box display="flex" alignItems="center" mb={2}>
        <Typography variant="body1" color="textSecondary" mr={2}>
          Author
        </Typography>
        <Typography variant="body1" color="textSecondary" mr={2}>
          A min ago
        </Typography>
        <Link href="#" variant="body1" color="primary">
          13 comments
        </Link>
      </Box>

      <Grid container spacing={4} mt={2}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardMedia
              component="img"
              alt="Food Image"
              image={foodpageImage}
              sx={{ height: 400 }}
            />
          </Card>

          <Box display="flex" justifyContent="space-between" my={2} sx={{ pt: 2 }}>
            <Box textAlign="center">
              <Typography variant="body1" color="textSecondary">Prep Time:</Typography>
              <Typography variant="h6">5 mins</Typography>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box textAlign="center">
              <Typography variant="body1" color="textSecondary">Cook Time:</Typography>
              <Typography variant="h6">5 mins</Typography>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box textAlign="center">
              <Typography variant="body1" color="textSecondary">Serving Time:</Typography>
              <Typography variant="h6">Lunch</Typography>
            </Box>
          </Box>

          <Typography variant="body1" paragraph sx={{ pt: 2 }}>
            Food Descriptions
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ pt: 2 }}>
            Nutrition Facts
          </Typography>
          <Typography variant="body2" component="div" gutterBottom sx={{ pt: 2, lineHeight: 2.5 }}>
            - 1/4 cup Sun-dried tomatoes<br />
            - 2 tbsp Soymilk<br />
            - 5/8 tsp Rosemary<br />
            - 3/4 tsp Thyme<br />
            - 1/4 medium whole Tomatoes<br />
            - 1/4 food without seed Lemons
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ pt: 2 }}>
            Instructions:
          </Typography>
          <Typography variant="body2" component="div" gutterBottom sx={{ pt: 2 }}>
            - Thinly slice the onion, then soak it in a small bowl, filled with water and a few drops of vinegar. Set aside 30 min or leave it overnight in the refrigerator. This makes the raw onion easier to slice and crispier.<br />
            <Box component="span" sx={{ display: 'block', mb: 2.5 }} />
            - Wash and dry the mixed greens, then arrange on a serving plate. Add the drained onion, sun-dried tomatoes and crumbled feta cheese.<br />
            <Box component="span" sx={{ display: 'block', mb: 2.5 }} />
            - Pour the oil, lemon juice and mustard into a small bowl. Season with salt and pepper to taste then whisk to emulsify the vinaigrette. Pour it over the mixed greens and serve.
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 2, mb: 2, height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Typography variant="h6" gutterBottom>
              Nutrition Facts
            </Typography>
            <Divider sx={{ mb: 2 }} />
            {[
              { label: 'Calories', value: '494' },
              { label: 'Carbs', value: '80g' },
              { label: 'Fat', value: '18g' },
              { label: 'Protein', value: '24g' },
              { label: 'Fiber', value: '32g' },
              { label: 'Net Carbs', value: '56g' },
              { label: 'Sodium', value: '444mg' },
              { label: 'Cholesterol', value: '0mg' },
            ].map((item, index) => (
              <Box key={index}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="body2">{item.label}</Typography>
                  <Typography variant="body2">{item.value}</Typography>
                </Box>
                {index < 7 && <Divider sx={{ my: 1 }} />}
              </Box>
            ))}
          </Paper>

          <Typography variant="h6" gutterBottom>
            Recent Recipes
          </Typography>
          {recipeImage.map((image, index) => (
            <Box display="flex" mb={2} key={index}>
              <CardMedia
                component="img"
                image={image}
                alt={`Recent Recipe ${index + 1}`}
                sx={{ width: 100, height: 100, borderRadius: 1 }}
              />
              <Box ml={2}>
                <Typography variant="body2">
                  Green Goddess Wrap is a Light & Simple
                </Typography>
              </Box>
            </Box>
          ))}

          <Paper elevation={2} sx={{ p: 2, mt: 2 }}>
            <Typography variant="h6" gutterBottom>
              Stay Connected with our Recipes updates
            </Typography>
            <Typography variant="body2" gutterBottom>
              for the latest health tips and delicious recipes
            </Typography>
            <TextField
              label="Enter your email..."
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" fullWidth>
              SIGN UP
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FoodPage;
