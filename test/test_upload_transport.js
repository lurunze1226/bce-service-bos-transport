

import Transport from '../src/uploader/transport';
import MultiTransport from '../src/uploader/multi_transport';

const _transport = new Transport(
    {
        endpoint: 'http://bos.qasandbox.bcetest.baidu.com',
        credentials: {
            ak: 'fdd8f61810764eed9bcd6cc1e2296006',
            sk: '479e1f33e5514dd3981fedb8ee9f67e4',
        },
    },
    {
        uuid: 'test_uuid',
        bucketName: 'bce-bos-client',
        objectKey: '40111',
        localPath: '/Users/mudio/Desktop/tmp/10m',
    },
);

_transport.on('start', msg => console.log(`start => ${JSON.stringify(msg)}`));

_transport.on('pause', msg => console.log(`pause => ${JSON.stringify(msg)}`));

_transport.on('progress', msg => console.log(`progress => ${JSON.stringify(msg)}`));

_transport.on('finish', msg => console.log(`finish => ${JSON.stringify(msg)}`));

_transport.on('error', msg => console.log(`error => ${JSON.stringify(msg)}`));

_transport.start();
