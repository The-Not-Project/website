export async function verifyCaptcha(token: string) {
  const verifyRes = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${token}`,
    { method: "POST" },
  );
  const verifyData = await verifyRes.json();
  console.log(verifyData);
  
  return verifyData.success && verifyData.score >= 0.5;
}