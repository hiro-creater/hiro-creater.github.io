import { Timeline } from '@mantine/core';

export function Undergraduate1(){
    return(
        <div className="main">
            <Timeline active={10} bulletSize={30} lineWidth={5} color="green">
                <Timeline.Item  title="4月">
                    <ul>
                        <li>会津大学に入学</li>
                        <li>研究室訪問を始める</li>
                        <li>コンピュータの基礎を学び始める</li>
                    </ul>
                </Timeline.Item>

                <Timeline.Item  title="5月">
                     <ul>
                        <li>成瀬研究室を訪問し、ロボット競技チームに加入する。</li>
                        <li>初めてのTOEICを受験　550点を取得</li>
                    </ul>
                </Timeline.Item>

                <Timeline.Item title="6月">
                    <ul>
                        <li>授業「プログラミング入門」C言語</li>
                    </ul>
                </Timeline.Item>

                <Timeline.Item title="7月">
                    <ul>
                        <li>授業「プログラミング入門」C言語</li>
                        <li>TOEIC ２回目の受験　675点を取得</li>
                        <li>「ロボカップ2019長岡」の合同練習に参加</li>
                    </ul>
                </Timeline.Item>

                <Timeline.Item title="8月">
                    <ul>
                        <li>茨城県つくば市のJAXA本部にお邪魔する。</li>
                        <li>「ロボカップ2019長岡」に出場し、第4位に入賞。</li>
                        <p>https://u-aizu.ac.jp/information/-japanopen2019.html</p>
                        <li>オープンキャンパスのアルバイトをする。</li>
                    </ul>
                </Timeline.Item>

                <Timeline.Item title="9月"></Timeline.Item>
                <Timeline.Item title="10月">
                    <ul>
                        <li>授業「プログラミングC」</li>
                    </ul>
                </Timeline.Item>
                <Timeline.Item title="11月">
                    <ul>
                        <li>授業「プログラミングC」</li>
                    </ul>
                </Timeline.Item>
                <Timeline.Item title="12月">
                    <ul>
                        <li>授業「アルゴリズムとデータ構造１」　演習でC言語を使用</li>
                    </ul>
                </Timeline.Item>
                <Timeline.Item title="1月">
                    <ul>
                        <li>授業「アルゴリズムとデータ構造１」　演習でC言語を使用</li>
                    </ul>
                </Timeline.Item>
                <Timeline.Item title="2月">
                    <ul>
                        <li>福島ロボットテストフィールドで行われたイベントに、スタッフとして参加。　<br /> ディーンフジオカにロボットの操縦方法を教える。</li>
                    </ul>
                </Timeline.Item>
            </Timeline>
        </div>
    );
}