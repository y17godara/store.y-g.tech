import { Resend } from "resend";
import fs from "fs";

// Function to read HTML content from the file
const readHTMLFile = (path: string): Promise<string> => {
  try {
    return new Promise((resolve, reject) => {
      fs.readFile(path, { encoding: "utf-8" }, (err, html) => {
        if (err) {
          reject(err);
        } else {
          resolve(html);
        }
      });
    });
  } catch (err) {
    return new Promise((resolve, reject) => {
      reject(err);
    });
  }
};

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL;
const rootDir = process.cwd(); // Get the root directory
const HTML = `${rootDir}/components/html/confirmation-mail.html`;

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  try {
    const htmlContent = await readHTMLFile(HTML); // Read HTML file
    await resend.emails.send({
      from: "mail@store.y-g.tech",
      to: email,
      subject: "Confirm your email",
      html: htmlContent.replace("{confirmLink}", confirmLink),
    });

    return true;
  } catch (err: any) {
    return null;
  }
};
