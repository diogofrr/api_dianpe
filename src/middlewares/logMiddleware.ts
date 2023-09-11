import { format } from "date-fns";
import { NextFunction, Request, Response } from "express";

export function logMiddleware(req: Request, res: Response, next: NextFunction) {
	console.log(
		format(new Date(), 'dd/MM/yyyy, HH:mm:ss'), '\t-\t',
		req.method, req.url, '\t-\t',
		req.hostname, req.ip, '\t-\t',
		req.headers['user-agent'], '\t-\t',
		req.headers.authorization
	);

	next();
}