import { Avatar, Card, Typography, Container, GridList, Grid, Link } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Locale } from '../../src/translations/config';
import { InlineLocale } from '~/src/translations/types';
import useTranslation from '../../src/hooks/useTranslation';
import { marginTop, marginBottom } from '../home/spacing';
import { Menber, MenberData } from './Menber';
import { teamData } from '../../src/data/teamData';

const teamTitle: InlineLocale<string> = {
  en: 'Our passionate team',
  zh: '我们的团队',
};

const teamSummary: InlineLocale<string> = {
  en:
    'We come from all over the world, have our own job, and engage in technical consulting or consulting work in our spare time.',
  zh: '我们来自世界各地，有着自己的本职工作，业余时间从事技术咨询工作',
};

const fox: MenberData = {
  name: 'fox',
  avatar: 'https://s.fox.mn/avatar/fox.png',
  bio: '',
};

const data = teamData.concat(
  new Array(15).fill(fox).map((e, i) => {
    let m: MenberData = Object.assign({}, e);
    m.bio = new Array(i).fill('这是简短介绍').join('');
    if (i < 4) {
      m.github = 'foxundermoon';
    }

    if (i < 10 && i > 3) {
      m.weibo = 'weiboid';
      m.twitter = 'twiter_id';
      m.github = 'foxundermoon';
      m.site = 'https://fox.mn';
    }
    if (i > 10) {
      m.site = 'https://fox.mn';
    }
    return m;
  })
);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(marginTop),
      marginBottom: theme.spacing(marginBottom),
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    teamTitle: {
      paddingBottom: theme.spacing(4),
    },
    teamSummary: {
      paddingBottom: theme.spacing(4),
    },
    avatar: {
      height: theme.spacing(16),
      width: theme.spacing(16),
      '& :hover': {
        height: theme.spacing(17),
        width: theme.spacing(17),
      },
    },
    card: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      position: 'relative',
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
      paddingBottom: theme.spacing(3),
    },
    geistWrapper: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);
export const Team: React.FC = () => {
  const classes = useStyles();
  const { t, locale } = useTranslation();
  return (
    <Container className={classes.root} maxWidth="lg">
      <Typography className={classes.teamTitle} variant="h3" component="strong">
        {teamTitle[locale]}
      </Typography>

      <Typography className={classes.teamSummary}>{teamSummary[locale]}</Typography>
      <Grid className={classes.geistWrapper} container spacing={3}>
        {data.map((e, i) => (
          <Menber key={i} data={e} />
          // <Grid key={i} item xs="auto">
          //   <Card key={i} className={classes.card} elevation={5}>
          //     <Avatar
          //       className={classes.avatar}
          //       variant="circle"
          //       alt={e.name}
          //       src={e.avatar}
          //     ></Avatar>
          //     <Typography>{e.name}</Typography>
          //     <Link href={`https://twitter.com/${e.twitter}`}>{`@${e.twitter}`}</Link>
          //   </Card>
          // </Grid>
        ))}
      </Grid>
    </Container>
  );
};