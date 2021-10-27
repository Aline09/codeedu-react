import React, { FC } from "react";
import { 
    createStyles, 
    Theme, 
    makeStyles,
    Card,
    CardActionArea,
    CardContent,
    CardHeader,
    Avatar,
    Typography,
    Link
} from '@material-ui/core';

type Props = {
  title: string,
  description: string,
  variant?: 'circle'| 'circular'| 'rounded'| 'square'| undefined,
  src: string,
  link: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      showcaseCard:{
        width: "100%",
        height: "100%"
      },
      showcaseCardMedia:{
        height: "187px",
        width: "187px",
      },
      showcaseCardTitle:{
        fontSize: "16px",
        fontWeight: 700,
        letterSpacing: "normal",
        lineHeight: "24px",
        textTransform: "none",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        maxWidth: "100%",
        overflow: "hidden"
      },
      showcaseCardHeader:{
        display: "flex",
        justifyContent: "center",
        flex: "1",
        "& div":{
          margin: "0",
          flex: "0",
        }
      },
      avatar:{
        marginRight: "0px",
        padding: "0px 10px",
        height: "167px",
        width: "167px"
      },
      showcaseCardSubtitle:{
        fontSize: "14px",
        fontWeight: 400,
        letterSpacing: "normal",
        lineHeight: "16px",
        textTransform: "none",
        color: theme.palette.text.primary
      }
  }));

const ShowcaseCard:FC<Props> = ({title, description, variant, src, link}) => {
    const classes = useStyles();
    
    return (  
      <Card className={classes.showcaseCard}>
        <CardActionArea href={link}>
        <CardHeader
          className={classes.showcaseCardHeader}
          avatar={
            <Avatar aria-label="recipe" variant={variant} src={src} className={classes.avatar}>
            </Avatar>
          }
          />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2" className={classes.showcaseCardTitle}>
          {title}
        </Typography>
        <Typography>
          <Link className={classes.showcaseCardSubtitle}>
            {description}
          </Link>
        </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}

export default ShowcaseCard