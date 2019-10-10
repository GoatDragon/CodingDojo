class StudentsController < ApplicationController

    def index
        @students = Student.where(dojo_id: params[:dojo_id])
    end

    def new
        @student = Student.new
    end

    def create
        @student = Student.new(student_params)
        if @student.save
            redirect_to students_path
        else
            render :new
        end
    end

    def show
    end

    def edit
    end

    def update
        @student.update(student_params)
    end

    def destroy
        @student.destroy
    end

    private
        def student_params
          params.require(:student).permit(:first_name, :last_name, :email, :dojo_id)
        end
end