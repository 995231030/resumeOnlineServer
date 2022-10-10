import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi() {
    return `<div style="position:fixed;top:0%;left:0%;background:#24242e;display:flex;align-items: center;
    justify-content: center;color: #fff;width:100%;height: 100%;font-weight: bold;font-size: 26px;user-select: none;flex-direction: column;">
        <div style="display:flex;padding-bottom:10px">
                <div style="color: #38a6f1;">console.</div>
                <div style="color: #dcb862;">log</div>
                <div style="color: #38a6f1;">(</div>
                <div style="color: #cf7855"> "hi egg" </div>
                <div style="color: #38a6f1;">)</div>
        </div>
        <div style="color: #999;font-size:12px;font-weight: 100;padding-bottom:10px">thanks for finding me, it's been a long time</div>
        <div style="color: #999;font-size:12px;font-weight: 100;padding-bottom:10px">LarryBlog @2022</div>
            </div>`;
  }
}
