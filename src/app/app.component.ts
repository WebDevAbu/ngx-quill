import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import Quill from 'quill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngx-quill';
  quillEditor: Quill;

  constructor(private fb: FormBuilder) {}

  public noticeForm = this.fb.group({
    content: ['', [Validators.required]],
  });

  quillConfig = {
    // 'emoji-toolbar': true,
    // 'emoji-shortname': true,
    toolbar: [
      [
        'bold',
        'italic',
        'underline',
        'strike',
        { list: 'ordered' },
        { list: 'bullet' },
        { size: ['small', false, 'large', 'huge'] },
        { color: [] },
        { background: [] },
        'link',
      ],
    ],
  };

  submit() {
    console.log(this.noticeForm.get('content'));
    console.log(this.noticeForm.invalid);
  }

  quillEditorCreated(quillObj: any) {
    this.quillEditor = quillObj;
  }

  validateNoticeForm = (fieldName: string): boolean => {
    if (
      this.noticeForm.get(fieldName)!.errors?.['required'] &&
      (this.noticeForm.get(fieldName)?.dirty ||
        this.noticeForm.get(fieldName)?.touched)
    ) {
      return true;
    } else {
      return false;
    }
  };
}
