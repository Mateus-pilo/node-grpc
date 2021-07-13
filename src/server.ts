import * as GRPC from 'grpc';
import { Handlers } from './handlers';



const startServer = async () =>  {
    const server: GRPC.Server = new GRPC.Server();
    await Handlers.setHandlers(server);
      // create a new gRPC server
      
      // define the host/port for server
      server.bindAsync(
          `0.0.0.0:8080`,
          GRPC.ServerCredentials.createInsecure(),
          (err: any, port: number) => {
              if (err != null) {
                  return console.error(err);
              }
              console.log(`gRPC listening on ${ port }`);
          },
      );
  
      // start the gRPC server
      server.start();
}


startServer();
