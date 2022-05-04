/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as ItemService from "./analysis.service";
import { AnalyzeInput } from "./parameter.interface";

/**
 * Router Definition
 */
export const itemsRouter = express.Router();

// POST items
itemsRouter.post("/", async (req: Request, res: Response) => {
  try {
    const item: AnalyzeInput = req.body;
    if (item.code == undefined) {
      res.status(201).json({error: -1, data: 'Failed due to invalid parameter'});
    }
    const result = await ItemService.run(item.code);

    res.status(201).json(result);
  } catch (e:any) {
    res.status(500).send(e.message);
  }
});

