export async function POST(request: Request) {
  const body = await request.json();

  const message = body.message;

  let supportScore = 0;
  let salesScore = 0;

  if (message.includes("ปัญหา")) {
    supportScore++;
  }

  if (message.includes("ไม่ได้")) {
    supportScore++;
  }

  if (message.includes("error")) {
    supportScore++;
  }

  if (message.includes("ราคา")) {
    salesScore++;
  }

  if (message.includes("ซื้อ")) {
    salesScore++;
  }

  if (message.includes("โปรโมชั่น")) {
    salesScore++;
  }

  let result = "OTHER";

  if (supportScore > salesScore) {
    result = "SUPPORT";
  }

  if (salesScore > supportScore) {
    result = "SALES";
  }

  return Response.json({
    message: message,
    result: result
  });
}
