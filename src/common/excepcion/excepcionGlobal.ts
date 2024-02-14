import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from "@nestjs/common";

@Catch()
export class ExcepcionGlobal implements ExceptionFilter {
  private readonly logger = new Logger(ExcepcionGlobal.name);

  catch(exception: any, host: ArgumentsHost) {
    const httpContext = host.switchToHttp();
    const response = httpContext.getResponse();
    const request = httpContext.getRequest();

    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorResponse = exception instanceof HttpException ? exception.getResponse() : exception;

    this.logger.error(`Status ${status} Error: ${JSON.stringify(errorResponse)}`);

    response.status(status).json({
      time: new Date().toISOString(),
      path: request.url,
      error: errorResponse,
    });
  }
}
