const VERSION = "0.4";
const VERSIONDATE = "2023-12-11"
const YEAR = "2023";
const COMPANY = "iBB GmbH";

main();

function main() 
{
    document.getElementById('footer').innerText = COMPANY + " " + YEAR + " " + "V" + VERSION;
}


