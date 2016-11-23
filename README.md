# public-hostname

Resolve the public IP address and hostname of your current machine.

This module makes a HTTP POST request to "uu07nuop46.execute-api.us-east-1.amazonaws.com/api" IP resolving service.

## Installation

    npm install public-hostname

## Usage

	var ph = require("public-hostname");
	ph(callback)

Where

  * **callback** - function to run once the resolving succeeded or failed. Has error object and response data as arguments

The data argument for `callback` has the following properties

  * **address** - public IP address
  * **hostname** - (if available) hostname of the IP address

## Example

Resolve public IP:

    ph(function(err, data){
        console.log(err || data);
    });

Example response:

    {
        "address": "79.119.50.138",
        "hostname": "79-119-50-138.rdsnet.ro"
    }

## License

**ISC**
