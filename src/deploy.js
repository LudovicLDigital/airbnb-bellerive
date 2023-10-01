const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    host: process.env.FTP_HOST,
    port: 21,
    localRoot: __dirname + "/build",
    remoteRoot: "/public_html/labelleriveduvoyageur/",
    include: ["*", "**/*"],
    deleteRemote: true,
    forcePasv: true,
};

ftpDeploy
    .deploy(config)
    .then(res => console.log("deploy finished:", res))
    .catch(err => console.error(err));
