import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Avatar,
  Button,
  TextField,
  Link,
  IconButton,
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import postThumbnail from '../../assets/blogpageThumbNail.svg';
import postDescription from '../../assets/foodpageImage.svg';
import blogpageImage from '../pageStyle/postImage'; 

const SinglePostPage: React.FC = () => {
  const relatedArticles = [
    { title: 'Connecting artificial intelligence with digital product design', img: blogpageImage[0], link: '#' },
    { title: 'Here are some things you should know regarding how we work', img: blogpageImage[1], link: '#' },
    { title: 'Granny gives everyone the finger, and other tips from OFFF Barcelona', img: blogpageImage[2], link: '#' },
    { title: 'Hello world, or, in other words, why this blog exists', img: blogpageImage[3], link: '#' },
    { title: "It’s all about finding the perfect balance", img: blogpageImage[4], link: '#' },
    { title: "How modern remote working tools get along with Old School Cowboy", img: blogpageImage[5], link: '#' },
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h4" gutterBottom>
          Blog Post Title
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          For more information about our blog content, collaborations, or feedback, feel free to drop us an email. Our team is always here to help and connect with our readers. Don’t hesitate to reach out.
        </Typography>
        <Box
          component="div"
          sx={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            p: 4,
            mb: 2,
            display: 'inline-block',
            backgroundImage: `url(${postThumbnail})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 200,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </Box>
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar sx={{ mr: 2 }}>A</Avatar>
        <Box>
          <Typography variant="body2" color="textSecondary">
            By Author Name
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Date of publication
          </Typography>
        </Box>
        <Box ml="auto">
          <IconButton>
            <ShareIcon />
          </IconButton>
        </Box>
      </Box>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nunc euismod nisi, euismod consectetur nisl nunc euismod nisi.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Next on the pipeline
      </Typography>
      <Typography variant="body1" paragraph>
        Nulla facilisi. Proin euismod, nisl eget consectetur sagittis, nisl nunc euismod nisi, euismod consectetur nisl nunc euismod nisi.
      </Typography>
      <Box
        component="div"
        sx={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          p: 4,
          mb: 2,
          display: 'inline-block',
          backgroundImage: `url(${postDescription})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 200,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nunc euismod nisi, euismod consectetur nisl nunc euismod nisi.
      </Typography>
      <Typography variant="body1" paragraph>
        Phasellus iaculis neque purus sodales ultricies. Morbi urna lacus, hendrerit vel blandit vel, hendrerit vel orci. Sed interdum vel libero vitae venenatis:
      </Typography>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Donec euismod, nisl eget consectetur sagittis, nisl nunc euismod nisi.</li>
        <li>Phasellus iaculis neque purus sodales ultricies.</li>
      </ul>
      <Typography variant="body1" paragraph>
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
      </Typography>
      <Box display="flex" alignItems="center" mb={2}>
        <Avatar sx={{ mr: 2 }}>A</Avatar>
        <Box>
          <Typography variant="body2" color="textSecondary">
            By Author Name
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Date of publication
          </Typography>
        </Box>
        <Box ml="auto" display="flex">
          <Link href="#" sx={{ mx: 1 }}>
            <FacebookIcon />
          </Link>
          <Link href="#" sx={{ mx: 1 }}>
            <TwitterIcon />
          </Link>
          <Link href="#" sx={{ mx: 1 }}>
            <LinkedInIcon />
          </Link>
        </Box>
      </Box>
      <Divider sx={{ my: 4 }} />
      <Typography variant="h5" gutterBottom>
        What to read next
      </Typography>
      <Grid container spacing={2} mb={4}>
        {relatedArticles.map((article, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card>
              <CardMedia
                component="div"
                sx={{
                  height: 0,
                  paddingTop: '56.25%',
                  backgroundImage: `url(${article.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
              </CardMedia>
              <CardContent>
                <Typography variant="body2" gutterBottom>
                  {article.title}
                </Typography>
                <Link href={article.link} variant="body2" color="primary">
                  Read more
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ my: 4 }} />
      <Typography variant="h5" gutterBottom>
        Sign up for the newsletter
      </Typography>
      <Box component="form" sx={{ display: 'flex', mb: 4 }}>
        <TextField
          label="Your email"
          variant="outlined"
          fullWidth
          sx={{ mr: 2 }}
        />
        <Button variant="contained" color="primary">
          Subscribe
        </Button>
      </Box>
    </Container>
  );
};

export default SinglePostPage;
