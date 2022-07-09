if(/.zhihu.com/.test(website))
{
    if(/(封私信)/.test(document.title))
    {
        document.title = document.title.replace(/\(.*封私信\)/, '')
    }
    
}