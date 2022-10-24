// This file is auto-generated, don't edit it
import Dm20151123, * as $Dm20151123 from '@alicloud/dm20151123';
// 依赖的模块可通过下载工程中的模块依赖文件或右上角的获取 SDK 依赖信息查看
import * as $OpenApi from '@alicloud/openapi-client';
import Util, * as $Util from '@alicloud/tea-util';
// import * as $tea from '@alicloud/tea-typescript';


export default class Client {

    /**
     * 使用AK&SK初始化账号Client
     * @param accessKeyId
     * @param accessKeySecret
     * @return Client
     * @throws Exception
     * 
BsWxbX9P9kO7iJuZTXazSF1Qa7Tkj8
     */
    static createClient(accessKeyId: string, accessKeySecret: string): Dm20151123 {
        let config = new $OpenApi.Config({
            // 您的 AccessKey ID
            accessKeyId: accessKeyId,
            // 您的 AccessKey Secret
            accessKeySecret: accessKeySecret,
        });
        // 访问的域名
        config.endpoint = `dm.aliyuncs.com`;
        return new Dm20151123(config);
    }
    // 咋他吗回事啊
    // static async main(account: string, verificationCod: number, args: string[]): Promise<void> {
    static async main(account: string, verificationCod: number): Promise<void> {
        let client = Client.createClient("LTAI5tEPtbPZ4M8BaEGhP7Wa", "xvFtfV78JyvvCVhVKgx4nnWsBYqCLv");
        let singleSendMailRequest = new $Dm20151123.SingleSendMailRequest({
            // textBody: "11111111111",
            htmlBody: `验证码${verificationCod}`,
            subject: "验证码",
            toAddress: account,
            replyToAddress: true,
            addressType: 1,
            accountName: "larry@larryblog.top",
            fromAlias: "加伊和朋友们",
        });
        let runtime = new $Util.RuntimeOptions({});
        try {
            // 复制代码运行请自行打印 API 的返回值
            await client.singleSendMailWithOptions(singleSendMailRequest, runtime);
        } catch (error: object | any) {
            // 如有需要，请打印 error
            Util.assertAsString(error.message);
        }
    }

}
// Client.main(process.argv.slice(2));