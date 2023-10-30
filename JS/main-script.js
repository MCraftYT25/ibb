const VERSION = "0.3";
const VERSIONDATE = "2023-10-30"
const YEAR = "2023";
const COMPANY = "iBB GmbH";

main();

function main() 
{
    document.getElementById('footer').innerText = COMPANY + " " + YEAR + " " + "V" + VERSION;
}


