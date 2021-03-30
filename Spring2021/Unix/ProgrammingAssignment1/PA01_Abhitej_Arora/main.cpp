/*
 * Programming Assignment 1:A simple URL Parser. CS 3377.0w1
 *
 * Written by Abhitej Arora on February 10th 2021. NetID axa180177.
 *
 * Summary of the code: Proposed input of a string to take in a URL. The working of the code
 * is such that it can analyze each component of the code and then break it down into it's respective parts.
 * The parts would be protocol, domain, port, file path and parameters. Once it does take the input,
 * it can then check the input against specified conditions and then inform the user whether the URL
 * is valid or not.
 *
 * One extra feature of this parses is that it can point out the mistake in the URL as well. For example
 * if the port entry was not within 1-65535 or if the specific protocol was invalid.
 *
 * Note: This is my first assignment for this class so I would love some feedback! Thank you so much!
 *
 */


#include <iostream>
#include <string>
using namespace std;

int main(int argc, const char * argv[]) {
    string url;
    cout<<"Enter the URL you would like to be analyzed "<<endl;  //prompts user for input
    getline(cin, url); //recieves and stores user input

    bool protocolFlag = false;
    bool domainFlag = false;
    bool portFlag = false;
    bool pathFlag = false;
    bool paraFlag = false;
    string path;
    string parameter;

    size_t colon = url.find_first_of(":");
    string protocol = url.substr(0,colon);

    if(protocol == "http" || protocol == "https" || protocol == "ftp" || protocol == "ftps"){
        protocolFlag = true;
    }

    string url_wo_prot = url.substr(colon+3);

    size_t found1 = url_wo_prot.find_first_of(":");        //spot the :
    string domain = url_wo_prot.substr(0,found1);        //the domain is allocated to the specified variable

    size_t found4 = domain.find_first_of(".");        //spot the .
    string domainVal = domain.substr(0,found4);

    size_t found5 = domain.find_last_of(".");        //spot the .
    string domainVal1 = domain.substr(found4+1,found5-found4-1);
    string domainVal3 = domain.substr(found5+1,found1);

    if(domainVal!="" && domainVal1!="")
    { //test of the last part of the domain
        if(domainVal3 == "com"|| domainVal3 == "net"|| domainVal3 == "edu"|| domainVal3 == "biz"|| domainVal3 == "gov")
            domainFlag = true;

    }

    size_t found2 = url_wo_prot.find_first_of("/"); //spot the /
    string port = url_wo_prot.substr(found1+1,found2-found1-1);

    if ( (stoi(port)<1) || (stoi(port)>65535) )
        portFlag = true;

    if(url_wo_prot.find_first_of("?"))
    {
        size_t found3 = url_wo_prot.find_first_of("?"); // spot the ?
        path = url_wo_prot.substr(found2, found3-found2);
        parameter = url_wo_prot.substr(found3+1);
        paraFlag = true;
    }
    else
        path = url_wo_prot.substr(found2);


    if(path.at(0)=='/')
    {
        size_t period = path.find_first_of("."); //spot the .
        string type = path.substr(period);
        if(type == ".html" || type == ".htm")
        {
            pathFlag = true;
        }
    }

    //if any case did not work
    if(protocolFlag == false || domainFlag == false || portFlag == true || pathFlag == false){
        cout<<endl;
        cout<<"Invalid URL with following erroneous components:"<<endl;
        if(protocolFlag == false){
            cout<<"Protocol:    " << protocol<<" is not a valid protocol."<<endl;
        }
        if(domainFlag == false){
            cout<<"Domain:      "<< domainVal3 <<" is an invalid domain name."<<endl;
        }
        if(portFlag == true){
            cout<<"Port:        port number must be between 1 and 65535"<<endl;
        }
        if(pathFlag == false){
            cout<<"Path: "<<path<<" is not a valid file path."<<endl;
        }
    } //if all the cases worked, final output
    else{
        cout<<endl;
        cout<<"Protocol:    "<<protocol<<endl;
        cout<<"Domain:      "<<domain<<endl;
        cout<<"Port:        "<<port<<endl;
        cout<<"File path:   "<<path<<endl;
        if(paraFlag == true){
            cout<<"Parameters:  "<<parameter<<endl;
        }
    }
    return 0;
}
