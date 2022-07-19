import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import Section from "../components/Section";

interface ItemProps {
    image: string,
    content: string
}

const items: ItemProps[] = [
    {
        'image': 'https://picsum.photos/200/300',
        'content': 'card 1'
    },
    {
        'image': 'https://picsum.photos/200/300',
        'content': 'card 2'
    },
    {
        'image': 'https://picsum.photos/200/300',
        'content': 'card 3'
    },
]

const Catalog = () => {
    const theme = useTheme();
    const smBreakpoint = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Section>
            <Container>
                <Grid container spacing={2}>
                    {items.map((item, index) => (
                        <Grid item xs={12} lg={4} key={index}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.image}
                                    alt="green iguana"
                                />
                                {smBreakpoint && <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.content}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>}
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Section>
    );
};

export default Catalog;