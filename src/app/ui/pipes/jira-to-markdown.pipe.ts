import {Pipe, PipeTransform} from '@angular/core';
import * as j2m from 'jira2md';

@Pipe({
  name: 'jiraToMarkdown'
})
export class JiraToMarkdownPipe implements PipeTransform {

  transform(value: string): string {
    return (value)
      ? j2m.to_markdown(value)
      : value;
  }
}
