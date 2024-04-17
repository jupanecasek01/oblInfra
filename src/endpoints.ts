
import { Request, Response, Router } from "express";

//controllers





//services
function getWord(req: Request, res: Response): Promise<void> {
  return res.send("hola");
}

export function initEndpoints(

): Router {

  const router = new Router();

  router.get("/word", (req: Request, res: Response) =>
    getWord(req, res)
  );

  return router;
}
