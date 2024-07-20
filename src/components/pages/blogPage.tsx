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
  Link,
} from '@mui/material';
import blogpageImage from '../pageStyle/blogpageImage'; 
import blogpageThumbnail from '../../assets/blogpageThumbNail.svg';

const BlogPage: React.FC = () => {
  const articles = [
    { title: 'Here are some things you should know regarding how we work', img: blogpageImage[0], link: '/post' },
    { title: 'Granny gives everyone the finger, and other tips from OFFF Barcelona', img: blogpageImage[1], link: '/post' },
    { title: 'Hello world, or, in other words, why this blog exists', img: blogpageImage[2], link: '/post' },
    { title: 'Here are some things you should know regarding how we work', img: blogpageImage[3], link: '/post' },
    { title: 'Connecting artificial intelligence with digital product design', img: blogpageImage[4], link: '/post' },
    { title: 'It’s all about finding the perfect balance', img: blogpageImage[5], link: '/post' },
    { title: 'I believe learning is the most important skill', img: blogpageImage[6], link: '/post' },
    { title: 'Clients are part of the team', img: blogpageImage[7], link: '/post' },
    { title: 'Clients are part of the team', img: blogpageImage[8], link: '/post' },
    { title: 'Here are some things you should know regarding how we work', img: blogpageImage[9], link: '/post' },
    { title: 'Connecting artificial intelligence with digital product design', img: blogpageImage[10], link: '/post' },
    { title: 'How modern remote working tools get along with Old School Cowboy', img: blogpageImage[11], link: '/post' },
  ];

  const handleCardClick = (link: string) => {
    window.location.href = link; // Chuyển hướng đến đường dẫn đã cung cấp
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box textAlign="center" mb={4}>
        <Box
          component="div"
          sx={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            p: 4,
            mb: 2,
            display: 'inline-block',
            backgroundImage: `url(${blogpageThumbnail})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 200, 
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
        </Box>
        <Typography variant="h4" gutterBottom>
            Blog Post Title
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          For more information about our blog content, collaborations, or feedback, feel free to drop us an email. Our team is always here to help and connect with our readers. Don’t hesitate to reach out.
        </Typography>
      </Box>
      <Divider sx={{ my: 4 }} />
      <Typography variant="h5" gutterBottom>
        All articles
      </Typography>
      <Grid container spacing={2}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card 
              sx={{ cursor: 'pointer' }} // Thay đổi con trỏ khi di chuột vào Card
              onClick={() => handleCardClick('/post')} // Gọi hàm handleCardClick với đường dẫn tương ứng
            >
              <CardMedia
                component="div"
                sx={{ height: 0, paddingTop: '56.25%', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundImage: `url(${article.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
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
    </Container>
  );
};

export default BlogPage;
