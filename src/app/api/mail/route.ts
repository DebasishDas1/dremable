import VendorFormCompletionEmail from "@/emails/VendorFormCompletionEmail";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();
    const { data, error } = await resend.emails.send({
      from: "Dremable <contact@dremable.com>",
      to: [email],
      subject: "Welcome to Dremable ✨",
      react: VendorFormCompletionEmail({ userName: name }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
