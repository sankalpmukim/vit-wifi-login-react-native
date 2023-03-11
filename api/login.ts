export default async function login({
  userName: userId,
  password,
}: {
  userName: string;
  password: string;
}) {
  try {
    const response = await fetch(
      "http://phc.prontonetworks.com/cgi-bin/authlogin?URI=http://captive.apple.com/hotspot-detect.html",
      {
        credentials: "omit",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/110.0",
          Accept:
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.5",
          "Content-Type": "application/x-www-form-urlencoded",
          "Upgrade-Insecure-Requests": "1",
          Pragma: "no-cache",
          "Cache-Control": "no-cache",
        },
        referrer:
          "http://phc.prontonetworks.com/cgi-bin/authlogin?URI=http://detectportal.firefox.com/canonical.html",
        body: `userId=${userId}&password=${password}&serviceName=ProntoAuthentication&Submit22=Login`,
        method: "POST",
        mode: "cors",
      }
    );

    const data = await response.text();

    return data.includes("Successful Pronto Authentication");
  } catch (error) {
    console.error(error);
    return false;
  }
}
