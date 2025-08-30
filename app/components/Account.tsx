import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge";
import { CheckCircle, CheckCircle2 } from "lucide-react"
import { Circle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function Account(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex justify-center">Account Progress</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* <div className="relative w-24 h-24">
                        <Progress value={85}/>
                        <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold">85%</div>
                    </div> */}
                    <div className="flex justify-center">
                        <img src="/Progress circle.svg"
                            alt="Progress circle"/>
                    </div>
                    <div className="bg-[#F6F7FB] mt-6 px-6 py-6">
                        <h2 className="font-semibold">Steps Completed</h2>
                        <ul className="px-4 py-4">
                            <li className="flex items-center justify-between gap-2 font-DM sans font-[500] text-[14px] ">
                              <div className="flex items-center gap-2">
                                <Circle className="w-4 h-4 text-blue-500" />
                                 <span>Profile Setup </span>
                              </div>
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                            </li>
                            <li className="flex items-center justify-between gap-2 font-DM sans font-[500] text-[14px]">
                              <div className="flex items-center gap-2">
                                <Circle className="w-4 h-4 text-blue-500" />
                                  <span>Initial Training </span>
                              </div>
                               <CheckCircle2 className="w-4 h-4 text-green-500"  /> 
                            </li>
                            <li className="flex items-center justify-between gap-2 font-DM sans font-[500] text-[14px]">
                              <div className="flex items-center gap-2">
                                <Circle className="w-4 h-4 text-blue-500" />
                               <span>Legal Documents</span>
                            </div>
                               <CheckCircle2 className="w-4 h-4 text-green-500"  />
                            </li>
                        </ul>
                    </div>
                    <div className="bg-[#F6F7FB] px-6 py-6 mt-4">
                        <div className="mb-4">
                        <h2 className="font-semibold mt-2">Steps Remaining</h2>
                        <ul className="px-2 py-2">
                            <li className="flex items-center gap-4 font-DM sans font-[500] text-[14px]"><Circle className="w-4 h-4 text-blue-500" />Financial Integration</li>
                            <li className="flex items-center gap-4 font-DM sans font-[500] text-[14px]"><Circle className="w-4 h-4 text-blue-500" />Final Review</li>
                        </ul>
                    </div>
                    </div>
                </CardContent>
            </Card>

          <div className="grid grid-rows-2 gap-4">
            <Card>
                <CardHeader>
                    <CardTitle>Total Franchises Onboard</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between ">
                        <span className="font-bold text-[35px]">14</span>
                        <Badge variant="outline" className="h-8 min-w-8 rounded-full px-1 text-green-700">7%</Badge>
                        <Avatar>
                            <AvatarImage src="/Avatar2.png"/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="mt-4">
                        <img src="/ProgressBar.png"
                            alt="Progress"/>
                    </div>
                    <div className="space-y-2 text-sm mt-6">
                        <div className="flex justify-between gap-2">
                            <div className="flex justify-between gap-2 ">
                            <Circle className="w-4 h-4 text-blue-500"/>
                            <p className="font-DM sans font-[500] text-[14px]">Stage 2 (Document Submission) </p>
                            </div>
                            <span className="font-DM sans font-[500] text-[14px]">02</span>
                        </div>
                        <div className="flex justify-between">
                            <div  className="flex justify-between gap-2 ">
                            <Circle className="w-4 h-4 text-blue-500"/>
                            <span className="font-DM sans font-[500] text-[14px]">Stage 2 (Document Submission) </span>
                            </div>
                            <span className="font-DM sans font-[500] text-[14px]">07</span>
                        </div>
                        <div className="flex justify-between">
                            <div  className="flex justify-between gap-2 ">
                            <Circle className="w-4 h-4 text-blue-500"/>
                            <span className="font-DM sans font-[500] text-[14px]">Stage 3 (Document Submission) </span>
                            </div>
                            <span className="font-DM sans font-[500] text-[14px]">05</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Financial Wellbeing
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between" >
                        <div>
                        <span className="font-bold text-[35px]">20</span>
                        <p className="font-DM sans font-[400] text-[16px]">Total Franchises</p>
                        </div>
                        <div>
                            <Badge variant="outline" className="h-8 min-w-8 rounded-full text-green-700">2.1%</Badge>
                        </div>
                    </div>
                    <div className="flex justify-between mt-5" >
                        <div className="bg-[#F6F7FB] px-6 py-6">
                            <p className="font-[400] text-[16px] ">Target</p>
                            <p className="font-bold text-[20px]">500,000</p>
                        </div>
                        <div className="bg-[#F6F7FB] px-6 py-6 ">
                            <p className="font-[400] text-[16px]">Current</p>
                            <p className="font-bold text-[20px]">450,000</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
         </div>

          <div className="grid grid-rows-2 gap-4">
            <Card>
                <CardHeader>
                    <CardTitle>Key Insights & Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between">
                     <div>
                    <p className="font-bold text-[35px]">10%</p>
                    <p className="font-DM sans font-[400] text-[16px]">Sales Growth</p>
                    </div>
                    <div>
                       < Avatar className="flex items-center mb-2">
                            <AvatarImage src="/Top.png"/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    <span className="inline-block bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full mb-4">Top Performer</span>
                    </div>
                    </div>
                    <div className="font-DM sans mt-6 bg-[#F6F7FB] px-6 py-6">
                        <p className="font-[500] text-[16px]">Feedback</p>
                        <p className="font-[400] text-[16px] ">Franchise are requesting more detailed training materials.</p>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Prospect Leads</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between bg-[#F6F7FB] px-2 py-2">
                        <Avatar>
                            <AvatarImage src="/Avatar1.png"/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="font-[500] text-[16px]">Wade Warren</span>
                        <span>Stage: Inital Inquiry</span>
                    </div>
                    <div className="flex justify-between bg-[#F6F7FB] px-2 py-2 mt-4">
                        <Avatar>
                            <AvatarImage src="/Avatar2.png"/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="font-[500] text-[16px]">Ava Wright</span>
                        <span>Stage: Inital Inquiry</span>
                    </div>
                    <div className="flex justify-between bg-[#F6F7FB] px-2 py-2 mt-4">
                        <Avatar>
                            <AvatarImage src="/Avatar3.png"/>
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="font-[500] text-[16px]">Cody Fisher</span>
                        <span>Stage: Inital Inquiry</span>
                    </div>
                </CardContent>
            </Card>
          </div>
        </div>

    );
};