import { Group, Image, Space, Tabs } from '@mantine/core';

import { Undergraduate1 } from './my_history/undergraduate1';
import { Undergraduate2 } from './my_history/undergraduate2';
import { Undergraduate3 } from './my_history/undergraduate3';
import { Graduate1 } from './my_history/graduate1'; 

import c from "./png-pgm-images/c.png";
import java from "./png-pgm-images/java.png";
import git from "./png-pgm-images/github-icon.png";
import html from "./png-pgm-images/html-5.png";
import css from "./png-pgm-images/css-3.png";
import cpp from "./png-pgm-images/c-plusplus.png";
import matlab from "./png-pgm-images/matlab.png";
import openrtm from "./png-pgm-images/openrtm.png";
import javascript from "./png-pgm-images/javascript.png";
import react from "./png-pgm-images/react.png";
import mantine from "./png-pgm-images/mantine.png";
import react_router from "./png-pgm-images/react-router.png";
import git_icon from "./png-pgm-images/git-icon.png";
import go from "./png-pgm-images/go.png";
import supabase from "./png-pgm-images/supabase.png";
import typescript from "./png-pgm-images/typescript-icon.png";

import "./career.css";

export default function Career(){
    return(
        <>
            <h1>大学時代の経歴</h1>
            <Space h="xl"/>
            <Tabs radius="xl" color="green" defaultValue="under1">
                <Tabs.List grow>
                    <Tabs.Tab value="under1">大学１年生</Tabs.Tab>
                    <Tabs.Tab value="under2">大学２年生</Tabs.Tab>
                    <Tabs.Tab value="under3">大学３年生</Tabs.Tab>
                    <Tabs.Tab value="graduate1">大学院１年生</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="under1" pt="xs">
                    <Group>
                        <Undergraduate1/>
                        <div className="under1_c">
                            <Image src={c} alt="C言語" />
                        </div>
                    </Group>
                </Tabs.Panel>

                <Tabs.Panel value="under2" pt="xs">
                    <Group>
                        <Undergraduate2/>
                        <>
                            <div className='under2_java'>
                                <Image src={java} alt="Java" />
                            </div>
                            <div className='under2_git'>
                                <Image src={git} alt="Git"/>
                            </div>
                            <div className='under2_c'>
                                <Image src={c} alt="C言語"/>
                            </div>
                            <div className='under2_html'>
                                <Image src={html} alt="HTML"/>
                            </div>
                            <div className='under2_css'>
                                <Image src={css} alt="CSS"/>
                            </div>
                        </>
                    </Group>
                    
                </Tabs.Panel>

                <Tabs.Panel value="under3" pt="xs">
                    <Undergraduate3/>
                    <Group>
                        <>
                            <div className='under3_java'>
                                <Image src={java} alt="Java"/>
                            </div>
                            <div className='under3_matlab'>
                                <Image src={matlab} alt="MATLAB"/>
                            </div>
                            <div className='under3_c_1'>
                                <Image src={c} alt="C言語"/>
                            </div>
                            <div className='under3_openrtm'>
                                <Image src={openrtm} alt="OpenRTM"/>
                            </div>
                            <div className='under3_cpp'>
                                <Image src={cpp} alt="C++"/>
                            </div>
                            <div className='under3_c_2'>
                                <Image src={c} alt="C言語"/>
                            </div>
                            <div className='under3_javascript'>
                                <Image src={javascript} alt="Javascript"/>
                            </div>
                            <div className='under3_css'>
                                <Image src={css} alt="CSS"/>
                            </div>
                            <div className='under3_react'>
                                <Image src={react} alt="React"/>
                                <Image src={mantine} alt="Mantine"/>
                                <Image src={react_router} alt="React Router"/>
                                <Image src={git_icon} alt="Git"/>
                            </div>
                        </>
                    </Group>
                </Tabs.Panel>

                <Tabs.Panel value="graduate1" pt="xs">
                    <Group>
                        <Graduate1/>
                        <>
                            <div className='graduate1_cpp'>
                                <Image src={cpp} alt="C++"/>
                            </div>
                            <div className='graduate1_javascript'>
                                <Image src={javascript} alt="Javascript"/>
                            </div>
                            <div className='graduate1_css'>
                                <Image src={css} alt="CSS"/>
                            </div>
                            <div className='graduate1_react'>
                                <Image src={react} alt="React"/>
                                <Image src={mantine} alt="Mantine"/>
                                <Image src={react_router} alt="React Router"/>
                                <Image src={git_icon} alt="Git"/>
                                <Image src={supabase} alt="Supabase"/>
                            </div>
                            <div className='graduate1_html'>
                                <Image src={html} alt="HTML"/>
                            </div>
                            <div className='graduate1_go'>
                                <Image src={go} alt="Go"/>
                            </div>
                            <div className='graduate1_typescript'>
                                <Image src={typescript} alt="Typescript"/>
                            </div>
                        </>
                    </Group>
                    
                </Tabs.Panel>
            </Tabs>
        </>
    );
}