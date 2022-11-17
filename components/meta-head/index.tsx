import Head from "next/head";

interface IProps {
  baseTitle?: string;
}

const MetaHead: React.FC<IProps> = ({ baseTitle }) => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      {baseTitle ? <title>{baseTitle} - The Monday Record</title> : <title>The Monday Record</title>}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
  );
};

export default MetaHead;
