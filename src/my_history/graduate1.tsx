import { Timeline } from '@mantine/core';

export function Graduate1(){
    return(
        <div className="main">
            <Timeline active={6} bulletSize={30} lineWidth={5} color="violet">
                <Timeline.Item  title="4月">
                    <ul>
                        <li>会津大学大学院に入学</li>
                        <li>新しい留学生と、日本語チューターの活動を始める</li>
                        <li>「お手伝いマッチングアプリ」の開発を継続</li>
                        <li>留学生と何回か食事する。</li>
                    </ul>
                </Timeline.Item>

                <Timeline.Item  title="5月">
                     <ul>
                        <li>留学生の友人と、ロボットのメンテナンス作業を行う。</li>
                        <li>「お手伝いマッチングアプリ」の開発を継続</li>
                    </ul>
                </Timeline.Item>

                <Timeline.Item title="6月">
                    <ul>
                        <li>TOEIC IPテストを受験 795点を取得</li>
                        <li>「お手伝いマッチングアプリ」の開発を継続、会津大学短期大学部の学生がチームに加わり、一緒に活動を開始</li>
                    </ul>
                </Timeline.Item>

                <Timeline.Item title="7月">
                    <ul>
                        <li>復興地イベントのTAとして、福島ロボットテストフィールドで働く</li>
                        <li>復興地イベントでロボット模型とArdino Nanoを頂いたので、自作ロボットの開発を開始</li>
                    </ul>
                </Timeline.Item>

                <Timeline.Item title="8月">
                    <ul>
                        <li>研究発表セミナーで発表する。</li>
                        <li>「お手伝いマッチングアプリ」、１回目のデプロイ</li>
                        <li>喜多方の高校にて、プログラミング教室のアルバイトをする。</li>
                        <li>研究のデータ収集に用いる、ロボットのコントローラ及びプラグインがついに完成する。</li>
                        <li>自作ロボットが完成する。（ハードのみ）</li>
                    </ul>
                </Timeline.Item>

                <Timeline.Item title="9月">
                    <ul>
                        <li>typescriptとgo言語を使って、簡単なアプリ制作を始める。</li>
                        <li>Github-pagesを使って、自分の自己紹介ページの作成を始める。</li>
                    </ul>
                </Timeline.Item>
                <Timeline.Item title="10月"></Timeline.Item>
                <Timeline.Item title="11月">
                    <ul>
                        
                    </ul>
                </Timeline.Item>
                <Timeline.Item title="12月"></Timeline.Item>
                <Timeline.Item title="1月"></Timeline.Item>
                <Timeline.Item title="2月">
                    <ul>
                        
                    </ul>
                </Timeline.Item>

                
            </Timeline>
        </div>
    );
}