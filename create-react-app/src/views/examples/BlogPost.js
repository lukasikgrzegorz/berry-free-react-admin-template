import { Grid, TextField, Button, Box } from '@mui/material';
import { useState } from 'react';

import Loader from 'ui-component/Loader';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

// ==============================|| TYPOGRAPHY ||============================== //

const token = 'TOKEN';
const bloggerToken = 'TOKEN';
const URL = 'http://127.0.0.1:8080/blogposts';
const BLOGGER_URL = 'https://www.googleapis.com/blogger/v3/blogs/1410187394991398442/posts?key=AIzaSyAAgDXeXXh6UHMWNHs5MoHXvECbsQl_E3M';

const BlogPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const generateDescription = async () => {
    setIsAiLoading(true);
    try {
      const response = await fetch(URL, {
        method: 'POST', // Lub inna metoda HTTP, jeśli to wymagane
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json' // Możesz dostosować nagłówki do swoich potrzeb
        },
        body: JSON.stringify({ title: title })
      });

      const data = await response.json();
      setContent(data.data);
      setIsAiLoading(false);
    } catch (error) {
      console.error('Wystąpił błąd:', error);
      setIsAiLoading(false);
    }
  };

  const postOnBlogger = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(BLOGGER_URL, {
        method: 'POST', // Lub inna metoda HTTP, jeśli to wymagane
        headers: {
          Authorization: `Bearer ${bloggerToken}`,
          'Content-Type': 'application/json' // Możesz dostosować nagłówki do swoich potrzeb
        },
        body: JSON.stringify({
          kind: 'blogger#post',
          blog: {
            id: '1410187394991398442'
          },
          title: `${title}`,
          content: `${content}`
        })
      });

      const data = await response.json();
      console.log(data.url);
      setIsLoading(false);
      window.open(data.url, '_blank');
    } catch (error) {
      console.error('Wystąpił błąd:', error);
      setIsLoading(false);
    }
  };

  return (
    <MainCard>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12} sm={12}>
          <SubCard title="Information">
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <TextField
                  label="Post titlte"
                  id="post-title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  fullWidth
                />
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
        <Grid item xs={12} sm={12}>
          <SubCard title="Content">
            <Grid container direction="column" spacing={1}>
              <Grid item>
                {' '}
                <TextField
                  id="post-content"
                  fullWidth
                  multiline
                  rows={10}
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value.replace(/\\n/g, ' '));
                  }}
                />
                <Box marginTop={3} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  {!isAiLoading ? (
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
                  {isLoading && <Loader />}
                </Box>
              </Grid>
            </Grid>
          </SubCard>
        </Grid>
      </Grid>
      <Box marginTop={2} sx={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
        <Button variant="contained" onClick={postOnBlogger}>
          {'Post it'}
        </Button>
      </Box>
    </MainCard>
  );
};

export default BlogPost;
