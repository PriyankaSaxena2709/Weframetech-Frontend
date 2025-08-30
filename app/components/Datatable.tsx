import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Ghost } from "lucide-react";

export function Datatable(){
    return(
        <div className="P-6 mt-6">
            <div>
                <p className="font-bold px-6">My Uploads</p>
                <p className="px-6 font-DM sans font-[400] text-[14px]">Documents that are uploaded by you</p>
            </div>
            
              <div className="flex justify-between gap-8 mb-2 px-4 py-4">
                 <Input 
                   type="text" 
                    placeholder="Search..." 
                       className="pl-8 w-64 h-10" 
                  />
                 <Button variant="outline">Filters</Button>
              </div>
           
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            <input type="checkbox"/>
                        </TableHead>
                        <TableHead>Document Name</TableHead>
                        <TableHead>Document Type</TableHead>
                        <TableHead>AI APP Inclusion</TableHead>
                        <TableHead>Dashboard</TableHead>
                        <TableHead>Stage</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="gap-4 px-5 py-5">
                    <TableRow>
                        <TableCell>
                            <input type="checkbox" />
                        </TableCell>
                        <TableCell className="flex items-center space-x-2">
                            <img src="/File type icon.svg"
                            alt="PDF"/>
                            <div>
                                <p className="font-medium">Tech requirements.pdf</p>
                                <p className="text-xs">200 KB</p>
                            </div>
                        </TableCell>
                        <TableCell>
                            <Badge variant="outline" className="bg-blue-100 text-blue-700">Legal</Badge>
                        </TableCell>
                        <TableCell>
                             <Switch defaultChecked />
                        </TableCell>
                        <TableCell>
                             <Switch defaultChecked />
                        </TableCell>
                        <TableCell>
                         <Select defaultValue="full">
                              <SelectTrigger className="w-[120px]">
                                <SelectValue />
                              </SelectTrigger>
                             <SelectContent>
                              <SelectItem value="full">Full</SelectItem>
                              <SelectItem value="onboarding">Onboarding</SelectItem>
                              <SelectItem value="franchisee">Franchisee</SelectItem>
                             </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <div className="flex space=x=2">
                            <Button variant="ghost" size="sm">Delete</Button>
                             <Button variant="ghost" size="sm">Edit</Button>
                           </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <input type="checkbox" />
                        </TableCell>
                        <TableCell className="flex items-center space-x-2">
                            <img src="/File type icon (2).svg"
                            alt="PDF"/>
                            <div>
                                <p className="font-medium">Tech requirements.pdf</p>
                                <p className="text-xs">200 KB</p>
                            </div>
                        </TableCell>
                        <TableCell>
                            <Badge variant="outline" className="bg-blue-100 text-blue-700">Vendors and Assets</Badge>
                        </TableCell>
                        <TableCell>
                             <Switch defaultChecked />
                        </TableCell>
                        <TableCell>
                             <Switch defaultChecked />
                        </TableCell>
                        <TableCell>
                         <Select defaultValue="full">
                              <SelectTrigger className="w-[120px]">
                                <SelectValue />
                              </SelectTrigger>
                             <SelectContent>
                              <SelectItem value="full">Full</SelectItem>
                              <SelectItem value="onboarding">Onboarding</SelectItem>
                              <SelectItem value="franchisee">Franchisee</SelectItem>
                             </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <div className="flex space=x=2">
                            <Button variant="ghost" size="sm">Delete</Button>
                             <Button variant="ghost" size="sm">Edit</Button>
                           </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <input type="checkbox" />
                        </TableCell>
                        <TableCell className="flex items-center space-x-2">
                            <img src="/File type icon (2).svg"
                            alt="PDF"/>
                            <div>
                                <p className="font-medium">Tech requirements.pdf</p>
                                <p className="text-xs">200 KB</p>
                            </div>
                        </TableCell>
                        <TableCell>
                            <Badge variant="outline" className="bg-blue-100 text-blue-700">Technology</Badge>
                        </TableCell>
                        <TableCell>
                             <Switch defaultChecked />
                        </TableCell>
                        <TableCell>
                             <Switch defaultChecked />
                        </TableCell>
                        <TableCell>
                         <Select defaultValue="full">
                              <SelectTrigger className="w-[120px]">
                                <SelectValue />
                              </SelectTrigger>
                             <SelectContent>
                              <SelectItem value="full">Full</SelectItem>
                              <SelectItem value="onboarding">Onboarding</SelectItem>
                              <SelectItem value="franchisee">Franchisee</SelectItem>
                             </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <div className="flex space=x=2">
                            <Button variant="ghost" size="sm">Delete</Button>
                             <Button variant="ghost" size="sm">Edit</Button>
                           </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <input type="checkbox" />
                        </TableCell>
                        <TableCell className="flex items-center space-x-2">
                            <img src="/File type icon.svg"
                            alt="PDF"/>
                            <div>
                                <p className="font-medium">Tech requirements.pdf</p>
                                <p className="text-xs">200 KB</p>
                            </div>
                        </TableCell>
                        <TableCell>
                            <Badge variant="outline" className="bg-blue-100 text-blue-700">Financial</Badge>
                        </TableCell>
                        <TableCell>
                             <Switch defaultChecked />
                        </TableCell>
                        <TableCell>
                             <Switch defaultChecked />
                        </TableCell>
                        <TableCell>
                         <Select defaultValue="full">
                              <SelectTrigger className="w-[120px]">
                                <SelectValue />
                              </SelectTrigger>
                             <SelectContent>
                              <SelectItem value="full">Full</SelectItem>
                              <SelectItem value="onboarding">Onboarding</SelectItem>
                              <SelectItem value="franchisee">Franchisee</SelectItem>
                             </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <div className="flex space=x=2">
                            <Button variant="ghost" size="sm">Delete</Button>
                             <Button variant="ghost" size="sm">Edit</Button>
                           </div>
                        </TableCell>
                    </TableRow>
                    <TableRow className="mb-4">
                        <TableCell>
                            <input type="checkbox" />
                        </TableCell>
                        <TableCell className="flex items-center space-x-2">
                            <img src="/File type icon.svg"
                            alt="PDF"/>
                            <div>
                                <p className="font-medium">Tech requirements.pdf</p>
                                <p className="text-xs">200 KB</p>
                            </div>
                        </TableCell>
                        <TableCell>
                            <Badge variant="outline" className="bg-blue-100 text-blue-700">Financial</Badge>
                        </TableCell>
                        <TableCell>
                             <Switch defaultChecked />
                        </TableCell>
                        <TableCell>
                             <Switch defaultChecked />
                        </TableCell>
                        <TableCell>
                         <Select defaultValue="full">
                              <SelectTrigger className="w-[120px]">
                                <SelectValue />
                              </SelectTrigger>
                             <SelectContent>
                              <SelectItem value="full">Full</SelectItem>
                              <SelectItem value="onboarding">Onboarding</SelectItem>
                              <SelectItem value="franchisee">Franchisee</SelectItem>
                             </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          <div className="flex space=x=2">
                            <Button variant="ghost" size="sm">Delete</Button>
                             <Button variant="ghost" size="sm">Edit</Button>
                           </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
        
    );
};
