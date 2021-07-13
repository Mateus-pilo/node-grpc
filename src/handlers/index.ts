import * as GRPC from 'grpc';
import * as Greeter from './greeter';

export class Handlers {

    public static async setHandlers(grpcServer: GRPC.Server): Promise<void>{
        grpcServer.addService(Greeter.GreeterService, new Greeter.Greeter());
    }
}