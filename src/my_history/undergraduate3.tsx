import { Timeline } from '@mantine/core';

export function Undergraduate3(){
    return(
        <div className="main">
            <Timeline active={12} bulletSize={30} lineWidth={5} color="red">
                <Timeline.Item  title="4月">
                    <ul>
                        <li>授業「ソフトウェア総合演習１」　課題でjavaを使用</li>
                        <li>留学生たちのサッカーサークルに参加し始める。</li>
                        <li>授業「ビジュアルコンピューティングのための幾何学」　演習でMATLABを使用</li>
                    </ul>
                </Timeline.Item>

                <Timeline.Item  title="5月">
                     <ul>
                        <li>授業「ソフトウェア総合演習１」　課題でjavaを使用</li>
                        <li>授業「ビジュアルコンピューティングのための幾何学」　演習でMATLABを使用</li>
                    </ul>
                </Timeline.Item>

                <Timeline.Item title="6月">
                    <ul>
                        <li>授業「ソフトウェア総合演習１」　課題でjavaを使用</li>
                        <li>授業「コンピュータグラフィックス概論」　演習でC言語を使用</li>
                        <li>授業「アルゴリズムとデータ構造２」　演習でJavaを使用</li>
                        <li>「留学準備のための英語体験プログラム」に応募、合格・参加決定</li>
                        <li>「国内インターンシップB アルプスアルパイン」に応募、合格・参加決定</li>
                        <li>国内インターンシップの事前研修が始まる。</li>
                    </ul>
                </Timeline.Item>

                <Timeline.Item title="7月">
                    <ul>
                        <li>授業「ソフトウェア総合演習１」　課題でjavaを使用</li>
                        <li>授業「コンピュータグラフィックス概論」　演習でC言語を使用</li>
                        <li>授業「アルゴリズムとデータ構造２」　演習でJavaを使用</li>
                        <li>ワールドロボットサミット(WRS)2020に向けた準備が始まり、<br />自分はロボットのシステムメンテナンスを担当、OpenRTMの勉強を始める。</li>
                    </ul>
                </Timeline.Item>

                <Timeline.Item title="8月">
                    <ul>
                        <li>WRSに向けた練習</li>
                    </ul>
                </Timeline.Item>

                <Timeline.Item title="9月">
                    <ul>
                        <li>ロボットと遠隔PCに搭載されているOpenRTMの問題が解決する。</li>
                        <li>福島ロボットテストフィールドで、WRSに向けた合同練習を行う。</li>
                        <li>ブリティッシュ・ヒルズに行き、「留学準備のための英語体験プログラム」に参加。</li>
                    </ul>
                </Timeline.Item>
                <Timeline.Item title="10月">
                    <ul>
                        <li>WRS2020で、会津大学は合計4つの賞を受賞。私達のチームはそのうち3つの賞を受賞。世界3位に輝く。</li>
                        <p>https://u-aizu.ac.jp/information/world-robot-summit.html</p>
                        <li>福島ロボットテストフィールドで、「ロボテス縁日」のバイトに参加。</li>
                        <li>日本語チューター（留学生に日本語を教える活動）のバイトを始める。</li>
                        <li>授業「プログラミングC++」</li>
                        <li>授業「人工知能」　演習でC言語を使用</li>
                    </ul>
                </Timeline.Item>
                <Timeline.Item title="11月">
                    <ul>
                        <li>オナーズプログラムに応募、候補生として選ばれる。</li>
                        <li>卒業論文発表に向けた研究を始める。</li>
                        <li>授業「プログラミングC++」</li>
                        <li>授業「人工知能」　演習でC言語を使用</li>
                    </ul>
                </Timeline.Item>
                <Timeline.Item title="12月">
                    <ul>
                        <li>卒論発表の練習の際、英語でのスピーチの出来を評価される。</li>
                    </ul>
                </Timeline.Item>
                <Timeline.Item title="1月">
                    <ul>
                        <li>会津大学　大学院入試</li>
                    </ul>
                </Timeline.Item>
                <Timeline.Item title="2月">
                    <ul>
                        <li>会津大学　大学院に合格</li>
                        <li>卒業論文発表</li>
                    </ul>
                </Timeline.Item>
                <Timeline.Item title="3月">
                    <ul>
                        <li>会津大学の学部を卒業し、学士になる。</li>
                        <li>「ITで地域課題を解決しよう」ハッカソンに参加する。２チーム中、２位になってしまう。</li>
                        <li>ハッカソンで発表したアイデアを評価され、開発を継続することになる。</li>
                    </ul>
                </Timeline.Item>
            </Timeline>
        </div>
    );
}