import * as grpc from 'grpc';

import { HelloRequest, HelloResponse } from '../proto/greeter/greeter_pb';
import { IGreeterServer } from '../proto/greeter/greeter_grpc_pb';
export { GreeterService } from '../proto/greeter/greeter_grpc_pb';

export class Greeter implements IGreeterServer {

    async sayHello(req:grpc.ServerUnaryCall<HelloRequest> ,callback: grpc.sendUnaryData<HelloResponse>): Promise<void>  {

        callback(null, new HelloResponse())
    };
 
}