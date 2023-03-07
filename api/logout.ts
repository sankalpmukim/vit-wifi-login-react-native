export default async function logout() {
  const response = await fetch(
    "http://phc.prontonetworks.com/cgi-bin/authlogout",
    {
      headers: {
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        Connection: "keep-alive",
        Referer:
          "http://phc.prontonetworks.com/cgi-bin/authlogin?URI=http://nmcheck.gnome.org/",
        "Sec-GPC": "1",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36",
      },
    }
  );

  return response.ok;
}
