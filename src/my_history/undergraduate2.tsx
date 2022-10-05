import { Timeline } from '@mantine/core';
import "./career_common.css";

export function Undergraduate2(){
    return(
        <div className="main">
            <Timeline active={12} bulletSize={30} lineWidth={5} color="orange">
                <Timeline.Item  title="4月">
                    <ul>
                        <li>授業「プログラミング Java」</li>
                    </ul>
                </Timeline.Item>

                <Timeline.Item  title="5月">
                     <ul>
                        <li>授業「プログラミング Java」</li>
                    </ul>
                </Timeline.Item>

                <Timeline.Item title="6月">
                    <ul>
                        <li>授業「データマネジメント概論」　ERモデル、UMLモデルなどを学ぶ</li>
                    </ul>
                </Timeline.Item>

                <Timeline.Item title="7月">
                    <ul>
                        <li>授業「データマネジメント概論」　git, SQLなどを学ぶ</li>
                    </ul>
                </Timeline.Item>

                <Timeline.Item title="8月">
                    <ul>
                        
                    </ul>
                </Timeline.Item>

                <Timeline.Item title="9月">
                    <ul>

                    </ul>
                </Timeline.Item>
                <Timeline.Item title="10月">
                    <ul>
                        <li>「ITで地域課題を解決しよう」ハッカソンのアイデアソンに参加する。</li>
                        <li>HTML, CSSの独学を始める。</li>
                    </ul>
                </Timeline.Item>
                <Timeline.Item title="11月">
                    <ul>
                        <li>福島県南相馬市のロボット開発チーム「MISORA」と、合同練習会を行う。</li>
                        <li>大学の先生のWEBページの再現に取り組む(HTML, CSSのみ)</li>
                    </ul>
                </Timeline.Item>
                <Timeline.Item title="12月">
                    <ul>
                        <li>授業「オペレーティングシステム概論」　課題をC言語で取り組む</li>
                    </ul>
                </Timeline.Item>
                <Timeline.Item title="1月">
                    <ul>
                        <li>授業「オペレーティングシステム概論」　課題をC言語で取り組む</li>
                    </ul>
                </Timeline.Item>
                <Timeline.Item title="2月">
                    <ul>
                        <li>ハッカソンに参加する。</li>
                    </ul>
                </Timeline.Item>
                <Timeline.Item title="3月">
                </Timeline.Item>
            </Timeline>
        </div>
    );
}